export class UserTalk {
    user : string;
    date : string;
    content : string;
    color : string;
    id : number;
    icon : string;
    constructor(id : number , user : string , date : string , content : string , color : string , icon : string){
        this.user = user;
        this.date = date;
        this.content = content;
        this.color = color;
        this.id = id;
        this.icon=icon;
    } 
}
export class DeclareData{   
    userTalk : UserTalk[] = [
        new UserTalk(0,'VanAnh','20/10/2012 10:31',`Cây đó bị nhiễm bệnh ,bệnh đậu lá vàng`,'blue-color',''),
        new UserTalk(1,'ChienThang','20/10/2012 10:32','Cây đo cần tiên thuốc','blue-color',''),
        new UserTalk(2,'Namhai','20/10/2012 10:33','Cây đó là cây cau già','blue-color',''),
        new UserTalk(3,'BenNghe','20/10/2012 10:34','cây đó là cây vạn tuế','blue-color',''),
        new UserTalk(4,'BenTre','20/10/2012 10:35','cây đó là cây dubai','blue-color',''),
        new UserTalk(5,'MyTalk','20/10/2012 10:36','cây đó là cây cầy gì mọi người','blue-color',''),
        new UserTalk(6,'Done','20/10/2012 10:37','cây đó là cây cổ thụ','blue-color',''),
    ]
}