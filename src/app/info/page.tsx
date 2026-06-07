import Link from "next/link";

export default function Info() {
    return(
        <section className="py-8 px-4">
            <div>
                <p className="text-2xl mb-6">
                    <strong>FAQ</strong>
                </p>
                <p>
                    <strong>Q: How do I participate in the open beta?<br/></strong>
                    A: Download the launcher from the launcher from the <Link href="/download" className="text-red-500 hover:text-red-700 underline">download page</Link> and link your Discord account when asked. That&apos;s it!
                </p>
                <br/>
                <p>
                    <strong>Q: When is the project coming out?<br/></strong>
                    A: The project is currently in open beta. We don&apos;t have a specific date for the full release yet.
                </p>
                <br/>
                <p>
                    <strong>Q: What platforms will this be on?<br/></strong>
                    A: We&apos;re currently only targeting the PC (Steam/EA) platform. We currently cannot support consoles (Xbox One/Xbox Series/PS4/PS5) due to technical limitations. 
                </p>
                <br/>
                <p>
                    <strong>Q: Will this cost money to use?<br/></strong>
                    A: No. We couldn&apos;t charge you money even if we wanted to due to legal reasons. 
                </p>
                <br/>
                <p>
                    <strong>Q: What features of Social Play will be supported?<br/></strong>
                    A: We plan to eventually support everything.
                </p>
                <br/>
                <p>
                    <strong>Q: Is this project backed/supported by EA or DICE?<br/></strong>
                    A: No. This project is 100% a community effort. We are not associated with EA or DICE in any way. 
                </p>
                <br/>
                <p>
                    <strong>Q: Will the project be open-sourced?<br/></strong>
                    A: Most of the project&apos;s components are already open-source on the <Link href="https://github.com/grid-leak" className="text-red-500 hover:text-red-700 underline" target="_blank" rel="noopener noreferrer">gridLeak</Link> GitHub org.
                </p>
                <br/>
                <p>
                    <strong>Q: Does the project utilise any leaked code from EA or DICE?<br/></strong>
                    A: No.  
                </p>
            </div>
        </section>
    );
}
