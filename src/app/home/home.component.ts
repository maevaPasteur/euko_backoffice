import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { element } from 'protractor';
import { BootService } from '../boot.service';


export interface Message {
    remetente?: string;
    mensagem: string;
    data?: Date;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    ngOnInit(): void {
    }

    @ViewChild('scrollMe') private myScrollContainer: ElementRef;
    msg: string;
    resultados: Message[];

    constructor(private chatBoot: BootService) {
        this.initBoot();
    }

    /**
     * Initialize the chatbot
     * Made with Dialogflow
     */
    initBoot() {
        this.resultados = [];
        this.chatBoot.getResponse('oi')
            .subscribe((lista: any) => {
                lista.result.fulfillment.messages.forEach((element) => {
                    this.resultados.push({ remetente: 'boot', mensagem: element.speech, data: lista.timestamp });
                });
            });
    }

    /**
     * Send a message to the chatbot via Dialogflow
     */
    sendMessage() {
        this.resultados.push({ remetente: 'eu', mensagem: this.msg, data: new Date() });
        this.chatBoot.getResponse(this.removerAcentos(this.msg))
            .subscribe((lista: any) => {
                lista.result.fulfillment.messages.forEach((element) => {
                    this.resultados.push({ remetente: 'boot', mensagem: element.speech, data: lista.timestamp });
                });
            });

        this.msg = '';
    }

    /**
     * Scroll the chatbot after the bot answer
     */
    ngAfterViewChecked() {
        this.scrollToBottom();
    }

    /**
     * Scroll to the end of the chatbot container
     */
    scrollToBottom(): void {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        } catch (err) { }
    }

    /**
     * Removes all accents
     * @param s The string to  change
     * @return Transformed string
     */
    private removerAcentos(s) {
        return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }

}
