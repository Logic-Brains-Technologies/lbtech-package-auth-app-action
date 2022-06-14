import { getToken } from 'github-app-installation-token';

const core = require('@actions/core');

const main = async () => {
    try {
        const appId = core.getInput('appId', { required: true });
        const installationId = core.getInput('installationId', { required: true });
        const privateKey = core.getInput('privateKey', { required: true });
    
        const objToken = await getToken({
            appId: appId,
            installationId: installationId, 
            privateKey: privateKey,
        });
    
        core.setOutput('app_token', objToken.token);

    } catch (err) {
        core.setFailed(err.message);
    }
};

main();