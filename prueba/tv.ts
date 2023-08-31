class Televisor {
  isOn: boolean;
  volume: number;
  channel: number;
  constructor(on: boolean = false, vol: number = 0, chn: number = 0) {
    this.isOn = on;
    this.volume = vol;
    this.channel = chn;
  }
  switchOnOff(): void {
    this.isOn = !this.isOn;
    console.log(this.isOn ? "encendido" : "apagado");
  }
  volUp(): void {
    if(this.isOn)
    {
    if(this.volume <= 99)
     {
      this.volume++;
     }
    else
      {
      console.log("vol max");
     }
    }
  }
  volDown(): void {
    if(this.isOn)
    {
      if(this.volume >= 0)
      {
        this.volume--;
      }
      else
      {
        console.log("mute");
      }
    }
 
  }
  channelUp(): void {
    if(this.isOn)
    {
      if(this.channel <=99)
      {
        this.channel++
      }
      else
      {
        this.channel = 1;
      }
    }
  }
  channelDown(): void {
    if(this.isOn)
    {
      if(this.channel >=0)
      {
        this.channel++
      }
      else
      {
        this.channel = 99;
      }
    }
  }
  pickChannel(channel: number): void {
    if (!this.isOn) return;
    this.channel = channel;
    console.log("Cambiaste al canal", this.channel);
  }
  
  info(): void {
    if(this.isOn)
    {
      console.log("Canal: "+this.channel+"/n Volumen: "+this.volume+"/n Hora actual: "+obtenerHoraActual());
    }
  
  }

}
function obtenerHoraActual(): string {
  const fechaActual = new Date();
  const hora = fechaActual.getHours();
  const minutos = fechaActual.getMinutes();
  const segundos = fechaActual.getSeconds();

  const horaActual = `${hora}:${minutos}:${segundos}`;

  return horaActual;
}
const tv01 = new Televisor();
tv01.switchOnOff();
tv01.switchOnOff();
tv01.switchOnOff();
tv01.pickChannel(45);