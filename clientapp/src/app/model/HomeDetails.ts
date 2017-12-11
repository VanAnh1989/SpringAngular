export class HomeDetails {
    content : Content[] = [
        new Content(1,"20/11/1989","Dịch châu chấu","Text messaging is most often used between private mobile phone users, as a substitute for voice calls in situations where voice communication is impossible or undesirable (e.g., during a school class or a work meeting). Texting is also used to communicate very brief messages, such as informing someone that you will..."),
        new Content(2,"21/11/1989","Bệnh đậu bông","Text messaging is most often used between private mobile phone users, as a substitute for voice calls in situations where voice communication is impossible or undesirable (e.g., during a school class or a work meeting). Texting is also used to communicate very brief messages, such as informing someone that you will..."),
        new Content(3,"22/11/1989","Dịch hủy mùa","Text messaging is most often used between private mobile phone users, as a substitute for voice calls in situations where voice communication is impossible or undesirable (e.g., during a school class or a work meeting). Texting is also used to communicate very brief messages, such as informing someone that you will..."),
        new Content(4,"23/11/1989","Cháy rrpj nước","Text messaging is most often used between private mobile phone users, as a substitute for voice calls in situations where voice communication is impossible or undesirable (e.g., during a school class or a work meeting). Texting is also used to communicate very brief messages, such as informing someone that you will..."),
        new Content(5,"24/11/1989","Thuốc có hại","Text messaging is most often used between private mobile phone users, as a substitute for voice calls in situations where voice communication is impossible or undesirable (e.g., during a school class or a work meeting). Texting is also used to communicate very brief messages, such as informing someone that you will..."),
        // new Content(6,"25/11/1989","Lá héo khô","Text messaging is most often used between private mobile phone users, as a substitute for voice calls in situations where voice communication is impossible or undesirable (e.g., during a school class or a work meeting). Texting is also used to communicate very brief messages, such as informing someone that you will..."),
        // new Content(7,"26/11/1989","Bệnh đậu xanh","Text messaging is most often used between private mobile phone users, as a substitute for voice calls in situations where voice communication is impossible or undesirable (e.g., during a school class or a work meeting). Texting is also used to communicate very brief messages, such as informing someone that you will..."),
        // new Content(8,"27/11/1989","Rệp thân mới","Text messaging is most often used between private mobile phone users, as a substitute for voice calls in situations where voice communication is impossible or undesirable (e.g., during a school class or a work meeting). Texting is also used to communicate very brief messages, such as informing someone that you will..."),
        // new Content(9,"28/11/1989","Chăm sóc lúa","Text messaging is most often used between private mobile phone users, as a substitute for voice calls in situations where voice communication is impossible or undesirable (e.g., during a school class or a work meeting). Texting is also used to communicate very brief messages, such as informing someone that you will..."),
        // new Content(10,"29/11/1989","Khu sản ngiệp","Text messaging is most often used between private mobile phone users, as a substitute for voice calls in situations where voice communication is impossible or undesirable (e.g., during a school class or a work meeting). Texting is also used to communicate very brief messages, such as informing someone that you will...")
    ];
}

export class Content{
    id : number;
    content : string;
    title : string;
    date : string;
    constructor(id : number ,date : string  , title : string ,content : string){
        this.id = id;
        this.content = content;
        this.date = date;
        this.title = title;
    }
}