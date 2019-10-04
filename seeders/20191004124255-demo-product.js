'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
    {
    
        name: 'Product 1 ',
      summery:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam voluptatem earum iste pariatur consectetur, eos sapiente alias aspernatur architecto molestias numquam officia, distinctio, quis libero molestiae necessitatibus quia laudantium itaque.',
      decripsion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet modi, illo nobis saepe laborum quaerat quidem dicta dolorum ea animi alias, provident iusto quam! Nisi numquam facilis eligendi est qui.',
      price  :9.99,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
      
    },
    {
    
      name: 'Product 2 ',
    summery:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam voluptatem earum iste pariatur consectetur, eos sapiente alias aspernatur architecto molestias numquam officia, distinctio, quis libero molestiae necessitatibus quia laudantium itaque.',
    decripsion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet modi, illo nobis saepe laborum quaerat quidem dicta dolorum ea animi alias, provident iusto quam! Nisi numquam facilis eligendi est qui.',
    price  :9.99,
    createdAt: Sequelize.literal('NOW()'),
    updatedAt: Sequelize.literal('NOW()'),
    
  },
  {
    
    name: 'Product 3 ',
  summery:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam voluptatem earum iste pariatur consectetur, eos sapiente alias aspernatur architecto molestias numquam officia, distinctio, quis libero molestiae necessitatibus quia laudantium itaque.',
  decripsion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet modi, illo nobis saepe laborum quaerat quidem dicta dolorum ea animi alias, provident iusto quam! Nisi numquam facilis eligendi est qui.',
  price  :9.99,
  createdAt: Sequelize.literal('NOW()'),
  updatedAt: Sequelize.literal('NOW()'),
  
},
{
    
  name: 'Product 4 ',
summery:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam voluptatem earum iste pariatur consectetur, eos sapiente alias aspernatur architecto molestias numquam officia, distinctio, quis libero molestiae necessitatibus quia laudantium itaque.',
decripsion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet modi, illo nobis saepe laborum quaerat quidem dicta dolorum ea animi alias, provident iusto quam! Nisi numquam facilis eligendi est qui.',
price  :9.99,
createdAt: Sequelize.literal('NOW()'),
updatedAt: Sequelize.literal('NOW()'),

}
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
