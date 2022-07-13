interface Logger {
  log(param: string): void;
}

class ConsoleLogger implements Logger {
  log(param: string): void {
    console.log(param);
  };
}

class ConsoleLogger2 implements Logger {
  log(param: string): void {
    console.log('Logger2: ' + param);
  }
}

interface Database {
  logger: Logger;

  save(key: string, value: string): void;
}

class ExampleDatabase implements Database {
  constructor(public logger: Logger = new ConsoleLogger()) { };

  save(key: string, value: string): void {
    this.logger.log(`salva o valor ${value} na chave ${key}`);
  }
}

//objetos de cada logger
const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();

//objetos da example database
const db1 = new ExampleDatabase(logger1);
const db2 = new ExampleDatabase(logger2);
const db3 = new ExampleDatabase();

db1.save('chave 1', 'valor 1');
db2.save('chave 2', 'valor 2');
db3.save('chave 3', 'valor 3');