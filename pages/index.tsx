import type { NextPage } from 'next'
import dynamic from "next/dynamic"

const Home: NextPage = () => {
  const Layout = dynamic(() => import('@components/Layout'), {ssr:false})
  const Profile = dynamic(() => import('@components/Profile'), {ssr: false})
  return (
    <Layout currentPage="Home">
      <Profile />
      <p className="text-gray-800 dark:text-gray-50">Aliquam suscipit. Duis leo est, interdum nec, varius in, facilisis
      vitae, odio. Phasellus eget leo at urna adipiscing vulputate. Nam eu erat
      vel arcu tristique mattis. Nullam placerat lorem non augue. Cras et
      velit. Morbi sapien nulla, volutpat a, tristique eu, molestie ac, felis.
      Suspendisse sit amet tellus non odio porta pellentesque. Nulla facilisi.
      Integer iaculis condimentum augue. Nullam urna nulla, vestibulum quis, lacinia
      eget, ullamcorper eu, dui. Quisque dignissim consequat nisl. Pellentesque porta
      augue in diam. Duis mattis. Aliquam et mi quis turpis pellentesque consequat.
      Suspendisse nulla erat, lacinia nec, pretium vitae, feugiat ac, quam. Etiam sed
      tellus vel est ultrices. Aliquam suscipit. Duis leo est, interdum nec, varius in, facilisis
      vitae, odio. Phasellus eget leo at urna adipiscing vulputate. Nam eu erat
      vel arcu tristique mattis. Nullam placerat lorem non augue. Cras et
      velit. Morbi sapien nulla, volutpat a, tristique eu, molestie ac, felis.
      Suspendisse sit amet tellus non odio porta pellentesque. Nulla facilisi.
      Integer iaculis condimentum augue. Nullam urna nulla, vestibulum quis, lacinia
      eget, ullamcorper eu, dui. Quisque dignissim consequat nisl. Pellentesque porta
      augue in diam. Duis mattis. Aliquam et mi quis turpis pellentesque consequat.
      Suspendisse nulla erat, lacinia nec, pretium vitae, feugiat ac, quam. Etiam sed
      tellus vel est ultrices.Aliquam suscipit. Duis leo est, interdum nec, varius in, facilisis
      vitae, odio. Phasellus eget leo at urna adipiscing vulputate. Nam eu erat
      vel arcu tristique mattis. Nullam placerat lorem non augue. Cras et
      velit. Morbi sapien nulla, volutpat a, tristique eu, molestie ac, felis.
      Suspendisse sit amet tellus non odio porta pellentesque. Nulla facilisi.
      Integer iaculis condimentum augue. Nullam urna nulla, vestibulum quis, lacinia
      eget, ullamcorper eu, dui. Quisque dignissim consequat nisl. Pellentesque porta
      augue in diam. Duis mattis. Aliquam et mi quis turpis pellentesque consequat.
      Suspendisse nulla erat, lacinia nec, pretium vitae, feugiat ac, quam. Etiam sed
      tellus vel est ultrices. Aliquam suscipit. Duis leo est, interdum nec, varius in, facilisis
      vitae, odio. Phasellus eget leo at urna adipiscing vulputate. Nam eu erat
      vel arcu tristique mattis. Nullam placerat lorem non augue. Cras et
      velit. Morbi sapien nulla, volutpat a, tristique eu, molestie ac, felis.
      Suspendisse sit amet tellus non odio porta pellentesque. Nulla facilisi.
      Integer iaculis condimentum augue. Nullam urna nulla, vestibulum quis, lacinia
      eget, ullamcorper eu, dui. Quisque dignissim consequat nisl. Pellentesque porta
      augue in diam. Duis mattis. Aliquam et mi quis turpis pellentesque consequat.
      Suspendisse nulla erat, lacinia nec, pretium vitae, feugiat ac, quam. Etiam sed
      tellus vel est ultrices.Aliquam suscipit. Duis leo est, interdum nec, varius in, facilisis
      vitae, odio. Phasellus eget leo at urna adipiscing vulputate. Nam eu erat
      vel arcu tristique mattis. Nullam placerat lorem non augue. Cras et
      velit. Morbi sapien nulla, volutpat a, tristique eu, molestie ac, felis.
      Suspendisse sit amet tellus non odio porta pellentesque. Nulla facilisi.
      Integer iaculis condimentum augue. Nullam urna nulla, vestibulum quis, lacinia
      eget, ullamcorper eu, dui. Quisque dignissim consequat nisl. Pellentesque porta
      augue in diam. Duis mattis. Aliquam et mi quis turpis pellentesque consequat.
      Suspendisse nulla erat, lacinia nec, pretium vitae, feugiat ac, quam. Etiam sed
      tellus vel est ultrices. Aliquam suscipit. Duis leo est, interdum nec, varius in, facilisis
      vitae, odio. Phasellus eget leo at urna adipiscing vulputate. Nam eu erat
      vel arcu tristique mattis. Nullam placerat lorem non augue. Cras et
      velit. Morbi sapien nulla, volutpat a, tristique eu, molestie ac, felis.
      Suspendisse sit amet tellus non odio porta pellentesque. Nulla facilisi.
      Integer iaculis condimentum augue. Nullam urna nulla, vestibulum quis, lacinia
      eget, ullamcorper eu, dui. Quisque dignissim consequat nisl. Pellentesque porta
      augue in diam. Duis mattis. Aliquam et mi quis turpis pellentesque consequat.
      Suspendisse nulla erat, lacinia nec, pretium vitae, feugiat ac, quam. Etiam sed
      tellus vel est ultrices.Aliquam suscipit. Duis leo est, interdum nec, varius in, facilisis
      vitae, odio. Phasellus eget leo at urna adipiscing vulputate. Nam eu erat
      vel arcu tristique mattis. Nullam placerat lorem non augue. Cras et
      velit. Morbi sapien nulla, volutpat a, tristique eu, molestie ac, felis.
      Suspendisse sit amet tellus non odio porta pellentesque. Nulla facilisi.
      Integer iaculis condimentum augue. Nullam urna nulla, vestibulum quis, lacinia
      eget, ullamcorper eu, dui. Quisque dignissim consequat nisl. Pellentesque porta
      augue in diam. Duis mattis. Aliquam et mi quis turpis pellentesque consequat.
      Suspendisse nulla erat, lacinia nec, pretium vitae, feugiat ac, quam. Etiam sed
      tellus vel est ultrices. Aliquam suscipit. Duis leo est, interdum nec, varius in, facilisis
      vitae, odio. Phasellus eget leo at urna adipiscing vulputate. Nam eu erat
      vel arcu tristique mattis. Nullam placerat lorem non augue. Cras et
      velit. Morbi sapien nulla, volutpat a, tristique eu, molestie ac, felis.
      Suspendisse sit amet tellus non odio porta pellentesque. Nulla facilisi.
      Integer iaculis condimentum augue. Nullam urna nulla, vestibulum quis, lacinia
      eget, ullamcorper eu, dui. Quisque dignissim consequat nisl. Pellentesque porta
      augue in diam. Duis mattis. Aliquam et mi quis turpis pellentesque consequat.
      Suspendisse nulla erat, lacinia nec, pretium vitae, feugiat ac, quam. Etiam sed
      tellus vel est ultrices.
      </p>
    </Layout>
  )
}

export default Home
