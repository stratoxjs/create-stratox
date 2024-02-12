import { StratoxTemplate } from 'stratox/src/StratoxTemplate.js';

export default class FormTemplateFields extends StratoxTemplate {
    
    /**
     * Regular input field
     * @return {string}
     */
    text() {
        let inst = this;
        return this.container(function() {
            return inst.input();
        });
    }
}