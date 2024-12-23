'use client'

import { GoogleLogo } from '@/components/google-logo'
import { IconInterChange } from '@/components/icon'
import { SelectLanguage } from '@/components/select'
import { TextArea } from '@/components/textarea'
import { TextAreaFooter } from '@/components/textarea-footer'
import { Button } from '@/components/ui/button'
import { useStore } from '@/hooks/useStore'
import { saveLangToLocalStorage } from '@/services/save-lang'
import { translate } from '@/services/translate'
import { useCallback, useEffect } from 'react'
import { entries } from './languages.d'
import { GithubRepo } from '@/components/github-repo'
import Link from 'next/link'

export default function Home() {
  const { state, actions } = useStore()
  const { setFrom, setTo, interchangeLanguages, setResult, setText } = actions
  const { from, to, loading, text, result } = state

  useEffect(() => {
    const fetch = async () => {
      const result = await translate({ text, from, to })
      setResult(result)
    }

    fetch()
  }, [text, from, to])

  useEffect(() => {
    saveLangToLocalStorage({ lang: { from, to } })
  }, [from])

  const handlePressEvent = useCallback((event: KeyboardEvent) => {
    if (event.ctrlKey && event.key.toLowerCase() == 'k') {
      event.preventDefault()
      interchangeLanguages()
    }
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', handlePressEvent)
    return () => window.removeEventListener('keydown', handlePressEvent)
  }, [])

  return (
    <main className='h-[100svh] relative flex justify-center items-center flex-col gap-2'>
      <GithubRepo />

      <div className='flex flex-col gap-2 w-full px-2'>
        <header>
          <GoogleLogo />
        </header>

        <section className='flex gap-2 rounded justify-between'>
          <SelectLanguage value={from} entries={entries} onChanges={setFrom} />

          <Button
            variant='ghost'
            size='icon'
            className='px-2 disabled:opacity-50'
            onClick={interchangeLanguages}
            disabled={to === from}
          >
            <IconInterChange width={20} />
          </Button>
          <SelectLanguage value={to} entries={entries} onChanges={setTo} />
        </section>

        <section className='w-full flex flex-col md:flex-row md:gap-[3rem]'>
          <div className='relative md:w-full'>
            <TextArea type='from' onChange={setText} value={text} lang={from} />
          </div>
          <div className='relative md:w-full'>
            <TextArea
              type='to'
              loading={loading}
              onChange={setResult}
              value={result}
              lang={from}
            />
            <TextAreaFooter result={result} lang={to} />
          </div>
        </section>
      </div>

      <footer className='absolute bottom-4 left-4 text-[12px] opacity-50'>
        <Link href={'https://andrepg.vercel.app'} target='_blank'>
          Desarrollado por André {'</>'}
        </Link>
      </footer>
    </main>
  )
}
