import express from 'express';
import { QuestsDB } from '../../database/QuestsDB.js';
import { Quest } from '../../types/Quest.js';
import { HeroesDB } from '../../database/HeroesDB.js';
import { Hero } from '../../types/Hero.js';

export function questsRouter() {
    const router = express.Router();

    // TODO: Task 1
    /**
     * Gets all quests asscoiated with a hero
     */
    router.get('/heroes/:id/quests', (req, res) => {
        const id = req.params.id;
        const hero = HeroesDB.getInstance().getHero(id);

        // Return 404 if not found, else return hero object
        if (!hero) {
            res.sendStatus(404);
        } 
        else {
            res.send(QuestsDB.getInstance.getQuests(id));
        }
    });
    
    // TODO: Task 2
    /**
     * Creates a quest for a hero
     */
    router.post('/heroes/:id/quests', (req, res) => {
        const body = req.params.id.req.body;
        const id = req.params.id;
        const hero = HeroesDB.getInstance().getHero(id)
        const quest = new Quest(body);
        QuestsDB.getInstance().createQuest(quest);
        
        if(!hero){
            res.sendStatus(404)
        }
        else {
        res.sendStatus(201);
        }
    });
    
    // TODO: Task 3
    /**
         * Updates a quest by id
         */
    router.patch('/heroes/:id/quests/:id', (req, res) => {
        const id = req.params.id;
        const id2 = req.params.id.req.params.id

        const hero = HeroesDB.getInstance().getHero(id);
        const quest = QuestsDB.getInstance().getQuests(id2);
        if (!hero || !quest) {
            res.sendStatus(404);
        } 
        if(!hero === quest.heroID){
            res.sendStatus(400)
        } 
        else {
            QuestsDB.getInstance().updateQuest(id2, body);
            res.sendStatus(204);
        }
    });
    
    // TODO: Task 4
    /**
         * Deletes a quest by id
         */
    router.delete('/heroes/:id/quests/:id', (req, res) => {
        const id = req.params.id;
        const id2 = req.params.id.req.params.id

        const hero = HeroesDB.getInstance().getHero(id);
        const quest = QuestsDB.getInstance().getQuests(id2);
        if (!hero || !quest) {
            res.sendStatus(404);
        } 
        if(!hero === quest.heroID){
            res.sendStatus(400)
        }
        else {
            QuestsDB.getInstance().deletequest(id2);
            res.sendStatus(204);
        }
    });
    
    return router;
}