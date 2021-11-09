import { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import tw from 'tailwind-styled-components'
import Map from './components/Map'
import Link from 'next/link'

export default function Home() {
  // what are components? Reusable ui element

  return (
    <Wrapper>
      <Map />
      <ActionItems>
        {/* Header */}
        <Header>
          {/* Self closing tag */}
          <UberLogo src='https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg' />
          <Profile>
            <Name>Padra Ahani</Name>
            <UserImage src='https://lh3.googleusercontent.com/v2xvbNrTjxkgUVyRwLlfJceufjbC3ACoqWg5FRG-fFl_Yq3K4zBU9sByVNLzkH1t424zJq96APs2YNWDSlrrjYDcuigNxvxdc-MAZ0fEmObapK_-LMGsKoqqjF8pU0S96Ly8vZM2rRwBIoaqPnyodpe004hEk2_Q4MbnDhGN48hpv2J3xJ-nGsZLIQrBzvzWWe5BqDiJyfEWhN2NmrunGjCijEasWR_u_yJ9GUmxZZO4vntX0PBR6OqvyZZx9Xru9BReWO9S904T5xlVVDRpLSg8nwrRjmdTip8iAnZeuuIRNVooyzz1i6mg-jM1JEnFGWY6hO0a4DYEtXKo_uOBfYCcRuABUby4tlDUpTpPfBLLHaOuaxzKc6ep-hnvX9bn_ZE4ixi_XE2aMe1fpbcQ3yG4sKhZaTtP0QJ5psQhTLY60DoRSVNfbN1pBSLeokZTJOPG_9y8gsuNMpdrcqN5DuQTi4Ad7MGJPWFphaXqEjI_3-yJA2HOym-9PzIjfjtNcZvVRF6um-w3H57wxmCqXsgpnMMMqlxbPqeoNyPdO5frnBpLuBdnDlBdt_LyDEfZGAy68PVckiISCzSkGg66DOTICimLuqfVNmvBh0KfWh0wGaZWAmVl5UNwHyVlpJXTMg8WBPEdzqodBdMrC-ThTsYNHaw7IqsyZM2A1PJv8WfI4KdhUvotDNgZ4jeWOAENbi3T2VMt6Fby5XRBk3M6iMw=s656-no?authuser=0' />
          </Profile>
        </Header>
        <ActionButtons>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src='https://i.ibb.co/cyvcpfF/uberx.png' />
              Ride
            </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImage src='https://i.ibb.co/n776JLm/bike.png' />
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src='https://i.ibb.co/5RjchBg/uberschedule.png' />
            Reserve
          </ActionButton>
        </ActionButtons>
        <InputButton>Where to?</InputButton>

        {/* ActionButtons */}
        {/* InputButton */}
      </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex flex-col h-screen 
`

const ActionItems = tw.div`
  flex-1 p-4
`

const Header = tw.div`
flex justify-between items-center
`

const UberLogo = tw.img`
h-28 
`

const Profile = tw.div`
flex items-center
`

const Name = tw.div`
mr-4 w-20 text-sm
`

const UserImage = tw.img`
h-12 w-12 rounded-full border border-gray-200 p-px
`

const ActionButtons = tw.div`
flex
`

const ActionButton = tw.div`
flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl
`

const ActionButtonImage = tw.img`
h-3/5
`

const InputButton = tw.div`
h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8
`
