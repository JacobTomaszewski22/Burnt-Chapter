import { createLazyFileRoute } from '@tanstack/react-router'
import ImageCarousel from '../photos/ImageCarousel'
import NavigationBar from '../NavigationBar'

export const Route = createLazyFileRoute('/photos')({
  component: Photos,
})

function Photos() {
  return(
    <>
    <NavigationBar />
    <ImageCarousel/>
    </>
  )
}
