import React from 'react'
import Link from 'next/link';

function Forms() {
  return (
    <section>
      <Link href= '/'>go Main</Link>

    <form>
    <label className="block">
      <span className="
      block text-sm font-medium text-pink-400">
        Username
      </span>
      <input
        type="text"
        placeholder="hi"
        // value="tbone"
        // disabled
        className="
        mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
        disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none
        invalid:border-pink-500 invalid:text-pink-600
        focus:invalid:border-pink-500 focus:invalid:ring-pink-500
        "
      />
    </label>
  </form>
  </section>
  )
}

export default Forms
