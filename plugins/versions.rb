class Versions < SiteBuilder
  def build
    hook :site, :post_read do
      site.data.changes.keys.each do |version|
        data = site.data.changes[version]
        add_resource :versions, version + ".html" do
          ___({
            version: version,
            json: data,
            short: version.gsub('-', '.'),
          })
          layout :version
          title "Rails Changelog for #{version.gsub('-', '.')}"
          output true
          content_type "text/html"
          permalink "/versions/#{version}.html"
          content data
        end
      end
    end
  end
end
