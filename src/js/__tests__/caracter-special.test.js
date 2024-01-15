import caracterSpecial from '../app';

test ('Проверка экстракции массива с описанием атак', () => {
    const character = {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
      special: [
        {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'https://icons8.ru/icon/116965/пушка',
        description: 'Двойной выстрел наносит двойной урон'
        }, 
        {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'https://icons8.ru/icon/19740/спарринг'
        }
      ]	
    }; 
    const correct = [
      {
        id: 8,
        name: 'Двойной выстрел',
        description: 'Двойной выстрел наносит двойной урон',
        icon: 'https://icons8.ru/icon/116965/пушка',
      }, 
      {
        id: 9,
        name: 'Нокаутирующий удар',
        description: 'Описание недоступно',
        icon: 'https://icons8.ru/icon/19740/спарринг',
      }
    ];

    expect(caracterSpecial(character)).toEqual(correct);

})