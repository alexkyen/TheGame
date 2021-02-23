import gql from 'fake-tag';

export const UpdateBrightIDVerifiedMutation = gql`
  mutation UpdatePlayerBrightIDVerified($verified: Boolean!) {
    update_player(_set: { brightid_verified: $verified }, where: {}) {
      returning {
        id
        brightid_verified
      }
    }
  }
`;
