import { v4 as uuid } from 'uuid';

export class Quest{
    /**
     * Creates a new quest object
     * 
     * @param {*} args A object containing quest properties
     */
    constructor(args) {
        this.id = uuid();
        this.name = args.name || 'Some Name';
        this.description = args.description || 'Some Description';
        this.heroID = args.heroID;
    }

    /**
     * Updates the quest class with new update values
     * 
     * @param {Partial<Quest>} args The partial quest object
     */
    updateQuest(args) {
        if (args.name) {
            this.name = args.name;
        }
        if (args.description) {
            this.description = args.description;
        }
        if (args.heroID) {
            this.heroID = args.heroID;
        }
    }
}