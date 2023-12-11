import * as rest from "@octokit/rest";
import * as graphql from "@octokit/graphql";
import * as types from "./types";

// import Repository from "./data";

export async function GetUserRepo(username: string): Promise<Array<types.MinimalRepository>> {
  const octokit = new rest.Octokit();
  console.log("salut");
  // Compare: https://docs.github.com/en/rest/reference/repos/#list-organization-repositories

  let res = await octokit.rest.repos
    .listForUser({
      username,
    });

  if (res.status != 200) {
    console.log(`Could not fetch repo list for user ${username}, unknown reason`);
    return null;
  }
  // let raw_repo_list: [Repository];

  let repo_list: Array<types.MinimalRepository> = res.data;

  return repo_list;
}


export async function GetUserPins(username: string) {
  const { res } = await graphql.graphql(`
    {
      user(login: ${username}){
        pinnedItems(first: 6){
          edges{
            node{
              ... on Repository{
                owner {
                  login
                },
                name,
                description,
                primaryLanguage{
                  name
                }
                pushedAt,
                updatedAt,
                isFork
              }
            }
          }
        }
      }
    }
  `);

  console.log(res);
}