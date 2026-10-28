import "./Fruits.css"
import Card from '../components/Card'

const Fruits = () => {
  return (
    <div id="wrapper-card">
      <Card image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEFlx5Tsuaj2xZ1P2KTZndxqvpbm9tuyyHl7_oH64LeA&s=10" text="Apple"/>
      <Card image="https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e3/Oranges_-_whole-halved-segment.jpg/960px-Oranges_-_whole-halved-segment.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail" text="Orange"/>
      <Card image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIITJXG8oauH8tYiG4Bu_nhtoDriysJ2w-YB_-pqAIQQ&s=10" text="Custard Apple"/>
      <Card image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKCLWsQt4JE2F-4e1onKPHRVsLvTSHCTwxKHNx4rdQ4A&s=10" text="Grapes"/>
      <Card image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbA4knNAzfP2SLcraKmDFXAy5mtwvNZXG0Z4b8cjQ8xQ&s=10" text="Banana"/>
      <Card image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXr4bhanlJeY_sMkigYvXBT6b_ZLej99kwSB5CdIpC2Q&s" text="Avacado"/>
      <Card image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKByWR1eu_Xy3g_j45S96AsdUlQASDC1BN2KA4PiVuTw&s=10" text="Strawberry"/>
      <Card image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8SN-WRCBOwZNV-uJal7r5PPXjPzGmXqyYNArD2Mp51A&s" text="Mango"/>
    </div>
  )
}

export default Fruits