const core = require('@actions/core');
const github = require('@actions/github');

try {
    // const nameToGreet = core.getInput('who-to-greet');
    console.log('-----CONTEXT-----');
    console.log(github.context);
    console.log('-----CONTEXT-----');
    console.log('-----EVENT-----');
    console.log(github.event);
    console.log('-----EVENT-----');
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`PAYLOAD ${payload}!`);
    const time = (new Date()).toTimeString();
    core.setOutput("versionType", 'patch');
} catch (error) {
    core.setFailed(error.message);
}
