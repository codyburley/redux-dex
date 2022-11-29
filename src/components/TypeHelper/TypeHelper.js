import {
  Fire,
  Bug,
  Dark,
  Dragon,
  Electric,
  Fairy,
  Fighting,
  Flying,
  Ghost,
  Grass,
  Ground,
  Ice,
  Normal,
  Poison,
  Psychic,
  Rock,
  Steel,
  Water
} from '../../assets/svgs/TypeSvgs'

export const TypeHelper = (type) => {
  if (type === 'fire') {
    return Fire();
  }
  if (type === 'bug') {
    return Bug();
  }
  if (type === 'dark') {
    return Dark();
  }
  if (type === 'dragon') {
    return Dragon();
  }
  if (type === 'electric') {
    return Electric();
  }
  if (type === 'Fairy') {
    return Fairy();
  }
  if (type === 'Fighting') {
    return Fighting();
  }
  if (type === 'flying') {
    return Flying();
  }
  if (type === 'ghost') {
    return Ghost();
  }
  if (type === 'grass') {
    return Grass();
  }
  if (type === 'ground') {
    return Ground();
  }
  if (type === 'ice') {
    return Ice();
  }
  if (type === 'normal') {
    return Normal();
  }
  if (type === 'poison') {
    return Poison();
  }
  if (type === 'psychic') {
    return Psychic();
  }
  if (type === 'rock') {
    return Rock();
  }
  if (type === 'steel') {
    return Steel();
  }
  if (type === 'water') {
    return Water();
  }
}

