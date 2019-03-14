import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { element } from 'protractor';
import { BootService } from '../services/bot/boot.service';
import PerfectScrollbar from 'perfect-scrollbar';


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

    constructor(private chatBoot: BootService) {
        this.initBoot();
    }

    ps: any;

    @ViewChild('scrollMe') private myScrollContainer: ElementRef;
    msg: string;
    resultados: Message[];

    ngOnInit(): void {
        this.ps = new PerfectScrollbar('.messages', {
            wheelSpeed: 2,
            wheelPropagation: true,
            minScrollbarLength: 20
        });
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
        this.scrollToBottom();
    }

    /**
     * Scroll to the end of the chatbot container
     * Event when bot give his answer
     */
    scrollToBottom() {
        try {
            setTimeout( () => {
                this.ps.update();
                document.querySelector('.messages').scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
            }, 300);
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
