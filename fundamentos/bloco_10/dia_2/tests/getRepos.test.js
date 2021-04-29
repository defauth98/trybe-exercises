const getRepos = require('../src/getRepos');

describe('getRepos', () => {
  it('should return a list', async () => {
    const repos = await getRepos('https://api.github.com/orgs/tryber/repos');

    expect(typeof repos).toEqual('object');
  });

  it('should contain sd-01-week4-5-project-todo-list', async () => {
    const repos = await getRepos('https://api.github.com/orgs/tryber/repos');

    expect(repos.includes('sd-01-week4-5-project-todo-list')).toBe(true);
  });

  it('should contain sd-01-week4-5-project-todo-list', async () => {
    const repos = await getRepos('https://api.github.com/orgs/tryber/repos');

    expect(repos.includes('sd-01-week4-5-project-meme-generator')).toBe(true);
  });
});
