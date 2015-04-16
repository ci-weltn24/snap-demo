import play.PlayRunHook
import sbt._

// see https://www.playframework.com/documentation/2.4.x/SBTCookbook
object Grunt {
  def apply(base: File): PlayRunHook = {

    object GruntProcess extends PlayRunHook {

      override def beforeStarted(): Unit = {
        Process("grunt default", base).run()
      }
    }

    GruntProcess
  }
}
