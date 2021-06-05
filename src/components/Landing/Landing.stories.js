import React from 'react'
import Bio from './Landing'

export default {
    title: 'Component/Bio',
    component : Bio,

}

const Template = (args) => (
    <Bio
    photo='/tower1.jpg'
    name='Bevan Tony Medrano'
    role='FrontEnd Web Developer'
    email='medranobevantony@gmail.com'
    />
)

export const Default = Template.bind({})