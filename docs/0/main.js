window.addEventListener('load', async(event) => {
    const cls1 = ClassByEval.get('Human');
    const ins1 = new cls1();
    ins1.intro();

    const cls2 = ClassByFunction.get('Human');
    const ins2 = new cls2();
    ins2.intro();

    // export default class Human {... としていないためエラー。でも<script type="module">でないためexportは使えない。
    // Uncaught (in promise) TypeError: cls3 is not a constructor
    const cls3 = await ClassByImport.get('../lib/Human.js');
    console.log(cls3);
    const ins3 = new cls3();
    ins3.intro();
});
