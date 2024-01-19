import {Flex, Heading, Image} from "@chakra-ui/react";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <Head>
        <title>Veracruz Hoy</title>
        <link rel="shortcut icon" href="/assets/icons/favicon.ico"/>

        <meta property="og:title" content="Veracruz Hoy"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://veracruzhoy.mx"/>
        <meta property="og:image" content="https://veracruzhoy.mx/assets/icons/logo.png"/>
        <meta property="og:image/png" content="https://veracruzhoy.mx/assets/icons/logo.png"/>
      </Head>

      <Flex
        direction="column"
        align="center"
        justify="center"
        p={10}
        h="100vh"
        bg="black"
      >
        <Image
          src="/assets/icons/logo.png"
          alt="Segun Adebayo"
          pb={10}
        />

        <Heading
          as="h1"
          size="xl"
          textAlign="center"
          color="white"
        >
          ¡Atención! Esta página está actualmente en construcción y pronto estará disponible para ofrecerte una experiencia única. Nuestro equipo está trabajando arduamente para brindarte el mejor contenido y funcionalidades. Agradecemos tu paciencia y te aseguramos que valdrá la pena esperar. ¡Muy pronto podrás disfrutar de todo lo que tenemos preparado para ti!
        </Heading>
      </Flex>
    </>
  )
}

export default Index