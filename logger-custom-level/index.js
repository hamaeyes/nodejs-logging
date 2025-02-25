import winston from "winston";

const myCustomLevels = {
  levels: {
    foo: 0,
    bar: 1,
    baz: 2,
    foobar: 3,
  },
  colors: {
    foo: "blue",
    bar: "green",
    baz: "yellow",
    foobar: "red",
  },
};

const customLevelLogger = winston.createLogger({
  levels: myCustomLevels.levels,

  transports: [new winston.transports.Console({ level: "foo" })],
});

customLevelLogger.foobar("some foobar level-ed message");
customLevelLogger.bar("some foobar level-ed message");
customLevelLogger.foo("some foobar level-ed message");
