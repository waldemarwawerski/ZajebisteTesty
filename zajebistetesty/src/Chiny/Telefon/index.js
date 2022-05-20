function Telefon({sms}) {
    return(
       <div>
       {sms === 'hej' && "No siema byku co u Ciebie?"}
       {sms === 'idzemy do kina?' && "Janse, ze tak"}
       {sms === 'Jest kartka na dole?' && "nie"}
       {sms === 'Mamy trzeci remont od paru miesiecy, dobra sorry juz sie przywracam' && "spoko zdaza sie"}
       </div>
    );
}
  
export default Telefon;
  