import { gql } from 'graphql-request/dist';

export const GetPlayer = gql`
  query GetPlayer($playerId: uuid!) {
    player_by_pk(id: $playerId) {
      id
      ethereum_address
    }
  }
`;

export const GetPlayerFromEth = gql`
  query GetPlayerFromETH($ethereum_address: String) {
    player(where: { ethereum_address: { _eq: $ethereum_address } }) {
      id
    }
  }
`;

export const GetGuild = gql`
  query GetGuild($guildname: String!) {
    guild(where: { guildname: { _eq: $guildname } }) {
      id
      guildname
      description
      discord_invite_url
      join_button_url
      logo
      moloch_address
      name
      type
      website_url
      guild_accounts {
        type
        identifier
      }
    }
  }
`;
