class Renderer {
    render() {
        console.log('имп');
    }
}

class ConsoleRenderer extends Renderer {
    render(data) {
        console.table(data);
    }
}

class WebRenderer extends Renderer {
    render(data) {
        const keys = Object.keys(data[0]);
        const line = (row) => '<tr>' + 
            keys.map((key) => `<td>${row[key]}</td>`).join('') + 
            '</tr>';
        const output = [
            '<table><tr>',
            keys.map((key) => `<th>${key}</th>`).join(''),
            '</tr>',
            data.map(line).join(''),
            '</table>',
        ];
        console.log(output.join(''));
    }
}
class MarkdownRenderer extends Renderer {
    render(data) {
        const keys = Object.keys(data[0]);
        const line = (row) => '|' +
            keys.map((key) => `${row[key]}`).join('|') + '|\n';
        const output = [
            '|', keys.map((key) => `${key}`).join('|') + '|\n',
            '|', keys.map(() => '---').join('|'), '|\n',
            data.map(line).join(''),
        ];
        console.log(output.join(''));
    }
}

class Context {
    constructor(renderer) {
        this.renderer = renderer;
    }

    process(data) {
        return this.renderer.render(data);
    }
}

const non = new Context(new Renderer());
const con = new Context(new ConsoleRenderer());
const web = new Context(new WebRenderer());
const mkd = new Context(new MarkdownRenderer());

const persons = [
    { Имя: 'Олег', Город: 'Стерлитамак', Родился: 2000, Работа: 'Нет'},
    { Имя: 'Петя', Город: 'Салават', Родился: 1968, Работа: 'Рабочий'},
    { Имя: 'Лена', Город: 'Ишимбай', Родился: 1990, Работа: 'Бизнесмен'},
    { Имя: 'Маша', Город: 'Москва', Родился: 2001, Работа: 'Продавец'},
    { Имя: 'Витя', Город: 'USA', Родился: 1956, Работа: 'Модель'}
];

console.group('Abstract:');
non.process(persons);
console.groupEnd();

console.group('\nConsole:');
con.process(persons);
console.groupEnd();

console.group('\nWeb:');
web.process(persons);
console.groupEnd();

console.group('\nMarkdown:');
mkd.process(persons);
console.groupEnd();