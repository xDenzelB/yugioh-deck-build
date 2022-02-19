import { client, checkError } from './client';

export function getUser() {
  return client.auth.session();

}


export async function signUp(email, password){
  const response = await client.auth.signUp({ email, password });
  
  return response.user;
}


export async function signIn(email, password){
  const response = await client.auth.signIn({ email, password });

  return response.user;
}


export async function logout() {
  await client.auth.signOut();

  return window.location.href = '../';
}

export async function addToCardsList(cards) {
  const response = await client 
    .from('yugioh_cards')
    .insert(cards);

  return checkError(response);
}
export async function getCardsList() {
  const response = await client 
    .from('yugioh_cards')
    .select()
    .order('id');

  return checkError(response);
}
export async function playCard(id) {
  const response = await client 
    .from('yugioh_cards')
    .update({ in_deck: true })
    .match({ id })
    .single();

  return checkError(response);
}

export async function searchCards(name, num, offset) {
  const response = await fetch(`/.netlify/functions/card-endpoint?name=${name}&num=${num}&offset=${offset}`);

  const json = await response.json();

  return json.data.data;
}