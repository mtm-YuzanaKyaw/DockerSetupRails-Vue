Sidekiq.configure_server do |config|
  # Sidekiq.log_formatter = MySidekiqFormatter.new
  config.redis = { url: "redis://" + ENV.fetch("REDIS_HOST", "redis") + ":" + ENV.fetch("REDIS_PORT", "6379")}
end

  
Sidekiq.configure_client do |config|
  # Sidekiq.log_formatter = MySidekiqFormatter.new
  config.redis = { url: "redis://" + ENV.fetch("REDIS_HOST", "redis") + ":" + ENV.fetch("REDIS_PORT", "6379")}
end
  