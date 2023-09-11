interface IElectronic {
    getBrand(): string;
    getModel(): string;
    getYear(): number;
  }
  
/*  class Electronic implements IElectronic {
    private brand: string;
    private model: string;
    private year: number;
    constructor(brand: string, model: string, year: number) {
      this.brand = brand;
      this.model = model;
      this.year = year;
    }
    getBrand(): string {
      return this.brand;
    }
    getModel(): string {
      return this.model;
    }
    getYear(): number {
      return this.year;
    }
  }*/
  class Phone implements IElectronic {
    private color: string;
    private brand: string;
    private model: string;
    private year: number;
    public constructor(
      brand: string,
      model: string,
      year: number,
      color: string
    ) {
        this.brand = brand;
        this.model = model;
        this.year = year;
       this.color = color;
    }
    makeCall(number: string): void {
      console.log(`Calling to ${number}...`);
    }
    getColor(): string {
      return this.color;
    }
    getBrand(): string {
        return this.brand;
      }
      getModel(): string {
        return this.model;
      }
      getYear(): number {
        return this.year;
      }
  }
  
  class Television implements IElectronic {
    private channel: number;
    private brand: string;
    private model: string;
    private year: number;
    public constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
         this.channel = 0;
    }
    changeChannel(channel: number): void {
      this.channel = channel;
    }
    getChannel(): number {
      return this.channel;
    }
    getBrand(): string {
        return this.brand;
      }
      getModel(): string {
        return this.model;
      }
      getYear(): number {
        return this.year;
      }
  }