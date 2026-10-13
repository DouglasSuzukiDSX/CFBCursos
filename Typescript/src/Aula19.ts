// (19) Curso de Typescript Completo #P19 Aprendendo sobre P.O.O. #P4 Métodos de classes em Typescript

class Computador19 {
   id: number
   nome: string
   private ram: number
   private cpu: number
   private ligado: boolean

   constructor(nome: string, ram: number, cpu: number) {
      this.id = 0
      this.nome = nome
      this.ram = ram
      this.cpu = cpu
      this.ligado = false
   }

   info(): void {
      console.log(`Nome..: ${this.nome}`)
      console.log(`Ram...: ${this.ram}`)
      console.log(`Cpu...: ${this.cpu}`)
      console.log(`Ligado: ${this.ligado ? 'Sim' : 'Não'}`)
      console.log('-------------')
   }

   ligar(): void {
      this.ligado = true
   }

   desligar(): void {
      this.ligado = false
   }

   upRam(qtde: number): void {
      if(qtde >= 0 && qtde <= 1000) {
         this.ram = qtde
      } else {
         console.log(`Quantidade ${qtde} para o computador ${this.nome} não é permitido`)
      }
   }
}

// Instanciar
const comp119 = new Computador19("Rapidao", 64, 10)
const comp219 = new Computador19("Carao", 32, 5)
const comp319 = new Computador19("Gamer", 128, 10)

comp119.ligar()
comp319.ligar()

comp119.upRam(128)
comp119.nome = 'Super Rapidao'

comp119.info()
comp219.info()
comp319.info()