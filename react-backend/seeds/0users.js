exports.seed = function(knex, Promise){

      return knex('users').insert([
        {
          id: 1,
          first_name: 'Ashley',
          last_name: 'Amato',
          email: 'ashley@gmail.com',
          password: 'gfehfhjegf773t2igFFFFuywi?',
          rating: 2,
          is_admin: true,
          salt: 'ejfberkjbfiebfiu238972367823vhssdvhjfhjgl',
          total_views: 90,
          total_likes: 1,
          created_at: new Date('2016-06-26 14:26:16 UTC'),
          updated_at: new Date('2016-06-26 14:26:16 UTC')
        }, {
          id: 2,
          first_name: 'Eddie',
          last_name: 'Marovich',
          email: 'eddie@gmail.com',
          password: 'gfehfhjegf773t2igFFFFuywi?',
          rating: 10,
          is_admin: false,
          salt: 'ejfberkjbfiebfiu238972367823vhssdvhjfhjgl',
          total_views: 78,
          total_likes: 10,
          created_at: new Date('2016-06-26 14:26:16 UTC'),
          updated_at: new Date('2016-06-26 14:26:16 UTC')
        }
      ])

    .then(function(){
    return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))")
    })
}
