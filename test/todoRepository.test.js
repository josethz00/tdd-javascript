const { describe, it, before, afterEach } = require('mocha');
const { expect } = require('chai'); 
const { createSandbox } = require('sinon');

const TodoRepository = require('../src/todoRepository');


describe('todoRepository', () => {

    describe('methods signature', () => {

        let todoRepository;
        before(() => {

            todoRepository = new TodoRepository();
            sandbox = createSandbox();

        });
        afterEach(() => {

            sandbox.restore();

        });
        it('should call insertOne from lokijs', () => {

            const mockDatabase = [ 
    
                {
            
                    name: 'xuxa danada',
                    age: 90,
                    meta: { revision: 0, created: 1611436679413, version: 0 },
                    '$loki': 1
            
                },
                { 
                    name: 'Joaozinho',
                    age: 90,
                    meta: { revision: 0, created: 1611436679413, version: 0 },
                    '$loki': 2 
                } 
            
            ];

            const functionName = 'find';
            const expectedReturn = mockDatabase;
            sandbox.stub(

                todoRepository.schedule,
                functionName

            ).returns(expectedReturn);

            const result = todoRepository.list();
            expect(result).to.be.deep.equal(expectedReturn);
            expect(todoRepository.schedule[functionName].calledOnce).to.be.ok;

        });
        it('should call find from lokijs', () => {

            const functionName = 'insertOne';
            const expectedReturn = true;
            sandbox.stub(

                todoRepository.schedule,
                functionName

            ).returns(expectedReturn);

            const data = {

                name: 'Josef Hasmussen'

            };

            const result = todoRepository.create(data);
            expect(result).to.be.ok;
            expect(todoRepository.schedule[functionName].calledOnceWithExactly(data)).to.be.ok;

        });

    });

});