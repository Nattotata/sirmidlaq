import {visit} from 'unist-util-visit'

const chordPlugin = () => {
    return function(tree) {
        visit(tree, 'text', visitor)
    }

    function visitor(node) {
        const regex = /::(.*?)::/g;
        const content = node.value;

        if (regex.test(content)) {
            const replacedContent = content.replace(
                regex,
                '<span class="chord">$1</span>');
                node.type = 'html'
                node.value = replacedContent
        }
    }
}
export default chordPlugin