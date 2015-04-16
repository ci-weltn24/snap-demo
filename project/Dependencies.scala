import sbt._

object Dependencies {

  val commonsIo = "commons-io" % "commons-io" % "2.4"
  val apacheCommonsMath3 =  "org.apache.commons" % "commons-math3" % "3.3"
  val jodaTime  = "joda-time" % "joda-time" % "2.2"
  val jSoup = "org.jsoup" % "jsoup" % "1.7.3"
  val guice = "com.google.inject" % "guice" % "4.0-beta5"
  val inject = "javax.inject" % "javax.inject" % "1"

  val scalaTest = "org.scalatest" %% "scalatest" % "2.2.1" % Test
  val mockito   = "org.mockito" % "mockito-all" % "1.9.5" % Test
  val scalaTestPlus = "org.scalatestplus" % "play_2.10" % "1.3.0" % Test
  val specs2 = "org.specs2" %% "specs2-core" % "2.4.15" % Test

}
