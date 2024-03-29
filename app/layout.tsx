import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import React from "react";
import Nav from "@/components/nav";
import "@/styles/global.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import Component from "./footer";
import Providers from "@/components/providers";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Brick-ly",
  description: "Brickly is a crowdfunding protocol built on polygon.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XQH33W31KN"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `   (function () {
            var w = window;
            var ic = w.Intercom;
            if (typeof ic === "function") {
              ic("reattach_activator");
              ic("update", w.intercomSettings);
            } else {
              var d = document;
              var i = function () {
                i.c(arguments);
              };
              i.q = [];
              i.c = function (args) {
                i.q.push(args);
              };
              w.Intercom = i;
              var l = function () {
                var s = d.createElement("script");
                s.type = "text/javascript";
                s.async = true;
                s.src = "https://widget.intercom.io/widget/your_app_id";
                var x = d.getElementsByTagName("script")[0];
                x.parentNode.insertBefore(s, x);
              };
              if (w.attachEvent) {
                w.attachEvent("onload", l);
              } else {
                w.addEventListener("load", l, false);
              }
            }
          })();
      
          // Call boot method
          (window as any).Intercom("boot", {
            app_id: ${process.env.INTERCOMKEY},
          });`,
          }}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.intercomSettings = {
            api_base: "https://api-iam.intercom.io",
            app_id: "c92gzs5q",
            name: "There", // Full name
            user_id: "3", // a UUID for your user
            email: "", // the email for your user
            created_at: 1312182000 // Signup date as a Unix timestamp
          };`,
          }}
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/c92gzs5q';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
`,
          }}
        ></script>

        <script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-XQH33W31KN');
  `,
          }}
        ></script>
        <link rel="icon" type="image/svg+xml" href="/navbar/BricklyIcon.svg" />
      </head>
      <body className=" font-sans antialiased overflow-x-hidden h-[calc(100dvh)]">
        <Providers>
          <Theme>
            <Nav />
            <main className="scroll-smooth flex min-h-screen overflow-x-hidden flex-col py-16 sm:px-12 grow">
              {children}
            </main>
            <footer className="p-8 z-50 text-center lg:h-72 bg-brickly50/70 ">
              <Component />
            </footer>
          </Theme>
        </Providers>
      </body>
    </html>
  );
}
