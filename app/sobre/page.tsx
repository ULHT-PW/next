'use client'

import Link from "next/link"



export default function SobrePage() {


    return (
        <>
            <h2>Sobre</h2>
            <p>Esta aplicação serve para demonstrar vários aspectos do React e Next.js</p>
            <p>Explore os
            <Link 
                href="https://youtube.com/playlist?list=PLq0eqW6lq_BQS2JliVYJFoPoxm6gvAexO&si=yMjci3DJzn1UHMkz"
                className="text-blue-700 underline"    
            >
                &nbsp;videotutoriais&nbsp;
            </Link>
            que mostram o desenvolvimento desta aplicação e ensinam os detalhes do React e do Next.js.</p>

        </>
    )
}