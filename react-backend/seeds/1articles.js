exports.seed = function(knex, Promise){

      return knex('articles').insert([
        {
          id: 1,
          user_id: 1,
          title: 'How To Ball',
          summary: 'I am Ashley and this is my story on how to ball out',
          body: "blah blah blah",
          image_url: 'picture.com',
          sport: 'basketball',
          views: 2,
          likes: 1,
          created_at: new Date('2016-06-26 14:26:16 UTC'),
          updated_at: new Date('2016-06-26 14:26:16 UTC')
        }, {
          id: 2,
          user_id: 2,
          title: 'How To Make a Milli',
          summary: 'I am Eddie and this is my story on how to make a milli',
          body: "blah blah blah blah",
          image_url: 'picture2.com',
          sport: 'horse-riding',
          views: 10,
          likes: 4,
          created_at: new Date('2016-06-26 14:26:16 UTC'),
          updated_at: new Date('2016-06-26 14:26:16 UTC')
        }
      ])

    .then(function(){
    return knex.raw("SELECT setval('articles_id_seq', (SELECT MAX(id) FROM articles))")
    })
}
