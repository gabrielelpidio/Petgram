import { useEffect, useState, useRef } from 'react'

export const useNearScreen = () => {
  const [show, setShow] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.ItersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            setShow(true)
            observer.disconnect()
          }
        })
      })
      observer.observe(ref.current)
    })
    return () => typeof observer !== 'undefined' && observer.disconnect()
  }, [ref])

  return [show, ref]
}
