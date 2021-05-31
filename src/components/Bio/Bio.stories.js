import React from 'react'
import Bio from './Bio'

export default {
    title: 'Component/Bio',
    component : Bio,

}

const Template = (args) => (
    <Bio
    headshot='https://pbs.twimg.com/profile_images/1354787530227367941/Q87bYPSa_400x400.jpg'
    name='Bevan Tony Medrano'
    role='FrontEnd Web Developer'
    email='medranobevantony@gmail.com'
    />
)

export const Default = Template.bind({})