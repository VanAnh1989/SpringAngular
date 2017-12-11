export class UserTalk {
    user : string;
    date : string;
    content : string;
    constructor(user : string , date : string , content : string){
        this.user = user;
        this.date = date;
        this.content = content;
    } 
}
export class DeclareData{   
    userTalk : UserTalk[] = [
        new UserTalk('VanAnh','10:31 20/10/2012',`
        Cây đó bị nhiễm bệnh ,
        bệnh đậu lá vàng`),
        new UserTalk('ChienThang','10:32 20/10/2012','Cây đo cần tiên thuốc'),
        new UserTalk('Namhai','10:33 20/10/2012','Cây đó là cây cau già'),
        new UserTalk('BenNghe','10:34 20/10/2012','cây đó là cây vạn tuế'),
        new UserTalk('BenTre','10:35 20/10/2012','cây đó là cây dubai'),
        new UserTalk('MyTalk','10:36 20/10/2012','cây đó là cây cầy gì mọi người'),
        new UserTalk('Done','10:37 20/10/2012','cây đó là cây cổ thụ'),
    ]
}