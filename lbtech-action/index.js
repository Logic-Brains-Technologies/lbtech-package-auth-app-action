import { getToken } from 'github-app-installation-token';
import { core } from '@actions/core';

const main = async () => {
    try {
        const appId = core.getInput('appId', { required: true });
        const installationId = core.getInput('installationId', { required: true });
        const privateKey = core.getInput('privateKey', { required: true });
    
        const { token } = await getToken({
            appId: appId,
            installationId: installationId, 
            privateKey: privateKey,
        });
    
        return token;
    } catch (err) {
        core.setFailed(err.message);
    }
};

main();