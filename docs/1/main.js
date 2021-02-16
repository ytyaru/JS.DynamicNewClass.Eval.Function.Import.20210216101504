import Human from './lib/Human.js';
import ClassByEval from './common/ClassByEval.js';
import ClassByFunction from './common/ClassByFunction.js';
import ClassByImport from './common/ClassByImport.js';
window.addEventListener('load', async(event) => {
    const cls1 = ClassByEval.get('Human');
    const ins1 = new cls1();
    ins1.intro();

    // VM165:3 Uncaught (in promise) ReferenceError: Human is not defined
    /*
    const cls2 = await ClassByFunction.get('Human');
    const ins2 = new cls2();
    ins2.intro();
    */

    const cls3 = await ClassByImport.get('../lib/Human.js');
    const ins3 = new cls3();
    ins3.intro();
});
