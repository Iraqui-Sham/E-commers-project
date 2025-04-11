import React from 'react'
// import "../assets/css/costum-style.css"
import moduleStyle from "../assets/css/main-Style.module.css"

const myStyle = {
    paragraph: {
        backgroundColor: "green",
        textAlign: "justify",
        padding: 20,
        color: "white"
    },
    red: {
        backgroundColor: "red"
    },
    purple: {
        backgroundColor: "purple"
    },
    orangered: {
        backgroundColor: "orangered"
    },
    yellow: {
        backgroundColor: "yellow"
    }
}
export default function CssExample() {
  return (
    <>
    <div className={moduleStyle.main}>
        <div className={moduleStyle.center}>
            <h1 style={{
                backgroundColor : "navy",
                color: "white",
                padding: 10,
                textAlign: "center"
            }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, doloribus?</h1>
            <p style={myStyle.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, porro! Nam vitae harum a vel eaque et excepturi dolorem ipsum! Distinctio illo earum dolores fuga minus sapiente, sed ex explicabo? Beatae ratione deserunt maxime cumque dicta tempore in necessitatibus nihil consequatur incidunt autem veritatis expedita debitis temporibus, error at quaerat et modi repellendus aspernatur! Exercitationem omnis aut ex accusamus neque quasi quos laudantium officiis magni illo eos accusantium enim maiores nam consectetur nisi est animi mollitia eaque fugiat sint quod, debitis necessitatibus ducimus. Adipisci, doloremque omnis molestiae sed, dolor repellat magni dolores, mollitia optio veritatis minus laboriosam incidunt beatae reiciendis?</p>
            <p style={{...myStyle.paragraph,...myStyle.red}}>Corrupti dolor aliquam vel omnis adipisci officiis quod animi atque doloribus, cupiditate illo non est, optio quaerat distinctio beatae perferendis deserunt dolorum exercitationem? Aliquid perferendis, quas ipsa adipisci facere doloremque inventore vel consectetur provident amet voluptatem magnam minus necessitatibus! Eius, quos consequuntur! Nostrum at saepe architecto libero ad? Distinctio corporis perferendis in laboriosam quia adipisci a nesciunt quos similique iure tempora quasi nisi illum totam suscipit et, tenetur inventore hic molestias neque? Est quos, incidunt eum minima porro hic maxime ullam, quidem laboriosam beatae esse assumenda. Fuga rerum molestias asperiores unde accusamus alias culpa animi id atque. Commodi, architecto explicabo?</p>
            <p style={{...myStyle.paragraph,...myStyle.purple}}>Odit unde quidem maiores obcaecati quae delectus quibusdam laboriosam atque cupiditate. Architecto a esse explicabo ipsa ipsum dolorum rem odit corrupti dolore, culpa cumque odio temporibus? Provident obcaecati iusto voluptatibus quos fugiat, quas voluptatum numquam qui ut eveniet culpa temporibus asperiores illum, tempore in debitis laboriosam ipsam laudantium magnam? Esse expedita consequatur quod, tempore doloribus, quos a porro, iste id modi quibusdam neque explicabo voluptas magni architecto ex. Ipsa neque possimus, voluptate debitis beatae veritatis et nulla soluta rem obcaecati cum. Impedit veniam molestias aliquid maiores velit minus ab alias qui et nemo nulla voluptatibus cumque, harum eveniet officiis ullam!</p>
            <p style={{...myStyle.paragraph,...myStyle.orangered}}>Magnam repellendus ducimus iusto dolor, dolores obcaecati maxime, facilis nam labore inventore consequuntur dicta! Temporibus hic dolorem ratione officia delectus magnam, vitae labore debitis repellat tenetur. Incidunt voluptatum amet debitis eos recusandae vero quo perspiciatis adipisci, libero eum aut sapiente officiis culpa magni aliquid aperiam impedit qui omnis autem repellat cumque esse velit itaque earum! Eligendi fugiat harum, ipsam perferendis officiis officia quo atque distinctio in? Non officia autem magnam beatae dolorum expedita illum eligendi odio, enim deserunt error assumenda maiores corrupti, ullam itaque aliquid. Libero error dolorem veritatis recusandae reiciendis. Amet asperiores, facere commodi itaque laborum maxime delectus fugiat.</p>
            <p style={{...myStyle.paragraph,...myStyle.yellow}}>Fugit quasi accusamus facilis doloribus ex mollitia voluptatem architecto, sunt dolores quos nemo, perspiciatis accusantium esse rerum aliquid, repudiandae assumenda vero laudantium odit. Eligendi fuga doloremque dolores cum id porro dicta, consectetur ducimus et nulla maxime sunt corporis voluptas nam suscipit. Quisquam rerum consequatur nemo quibusdam. Voluptas mollitia dolorem alias debitis sint corporis est, quasi harum iste voluptatibus totam quam repellendus nulla tempora culpa perspiciatis, ratione laborum, aut excepturi veritatis dicta vitae? Ex eos qui quae ipsam amet accusantium accusamus, minus laboriosam, autem, nostrum distinctio rerum dolorem quaerat fuga animi. Molestiae explicabo necessitatibus rerum accusamus aspernatur quia soluta cumque dolores.</p>
        </div>
    </div>
    </>
  )
}
