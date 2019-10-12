// @format
const superagent = require('superagent');

const URL = 'https://git.llsapp.com/api/v4/projects.json';
const Cookie =
  'auto_devops_settings_dismissed=true; frequently_used_emojis=horse_racing; sidebar_collapsed=false; remember_user_token=W1s2ODVdLCIkMmEkMTAkalU4Vzc0YVBDVHZiWmlxcWJOS2c5dSIsIjE1NjA4MjUxNjYuNzg4NDU4MyJd--053a6bef30311a60efee7e44bcbca10ea0b4a7d4; _gitlab_session=df95dfa105dd5077aeb4e3f78fbebb7d; event_filter=all';

module.exports = query => {
  return superagent
    .get(URL)
    .set('Cookie', Cookie)
    .query({
      search: query,
      per_page: 20,
      simple: true,
      membership: true,
      order_by: 'last_activity_at',
    })
    .then((err, res) => {
      if (err) {
        throw Erro(err);
      }

      return res.body.map((item, idx) => {
        const {name, name_with_namespace, web_url} = item;

        return {
          uid: idx,
          subtitle: name_with_namespace,
          title: name,
          arg: web_url,
        };
      });
    });
};
