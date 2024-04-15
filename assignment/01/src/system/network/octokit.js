import { Octokit } from "@octokit/core";
const octokit = new Octokit({
    auth: process.env.REACT_APP_GIT_TOKEN,
});

const getAPI = async (owner=null, repo=null, page=1, state='open', sort="created") => {
    if (!owner || !repo) {
        return;
    }

    try {
        const response = await octokit.request("GET /repos/{owner}/{repo}/issues", {
            owner,
            repo,
            page,
            state,
            sort,
        });
        return response;
    } catch(error) {
        console.log(error, 'in getAPI');
    }
}

const getIssue = async (owner=null, repo=null, issue_number=null) => {
    if (!owner || !repo || !issue_number) {
        return;
    }

    try {
        const response = await octokit.request('GET /repos/{owner}/{repo}/issues/{issue_number}', {
            owner,
            repo,
            issue_number,
            headers: {
              'X-GitHub-Api-Version': '2022-11-28'
            }
          })
        return response;
    } catch(error) {
        console.log(error, 'in getIssue');
    }
}

const renderMarkDown = async (text = "") => {
    try {
        const response = await octokit.request('POST /markdown', {
            text,
            headers: {
              'X-GitHub-Api-Version': '2022-11-28'
            }
        })

        return response
    } catch(error) {
        console.log(error, 'in getIssue');
    }
}


export { getAPI, getIssue, renderMarkDown };