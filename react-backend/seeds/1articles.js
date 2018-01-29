exports.seed = function(knex, Promise){

      return knex('articles').insert([
        {
          id: 1,
          user_id: 1,
          title: 'How To Ball',
          summary: 'I am Ashley and this is my story on how to ball out',
          body: "blah blah blah",
          image_url: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAkcAAAAJDdiZTRjM2EzLTAzYzEtNGU3Mi1hYzc1LTJiNTAwYWM3ZDY3Yw.jpg',
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
          image_url: 'https://images-na.ssl-images-amazon.com/images/I/41hGXnsgthL._SL500_AC_SS350_.jpg',
          sport: 'horse-riding',
          views: 10,
          likes: 4,
          created_at: new Date('2016-06-26 14:26:16 UTC'),
          updated_at: new Date('2016-06-26 14:26:16 UTC')
        },
        {
          id: 3,
          user_id: 2,
          title: 'How To Make a Milli',
          summary: 'I am Eddie and this is my story on how to make a milli',
          body: "blah blah blah blah",
          image_url: 'https://arc.sdsu.edu/mens_water_polo/images/gallery/2t.jpg',
          sport: 'horse-riding',
          views: 10,
          likes: 4,
          created_at: new Date('2016-06-26 14:26:16 UTC'),
          updated_at: new Date('2016-06-26 14:26:16 UTC')
        },
        {
          id: 4,
          user_id: 2,
          title: 'How To Make a Milli',
          summary: 'I am Eddie and this is my story on how to make a milli',
          body: "blah blah blah blah",
          image_url: 'https://www.teamusa.org/-/media/TeamUSA/Headshots/2016OlympicTeam/Water-Polo/Baron_McQuin_150x250.jpg',
          sport: 'horse-riding',
          views: 10,
          likes: 4,
          created_at: new Date('2016-06-26 14:26:16 UTC'),
          updated_at: new Date('2016-06-26 14:26:16 UTC')
        },
        {
          id: 5,
          user_id: 2,
          title: 'How To Make a Milli',
          summary: 'I am Eddie and this is my story on how to make a milli',
          body: "blah blah blah blah",
          image_url: 'https://scontent.cdninstagram.com/t51.2885-15/e35/p320x320/24274390_1750590135250503_2182795597797392384_n.jpg',
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
