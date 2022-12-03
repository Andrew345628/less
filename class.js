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
    
]